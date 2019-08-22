# WalletYandexPS
 Yandex for WALLET module
 
 Модуль для пополнения баланса модуля Wallet через платежную систему Yandex.
 
**/assets/payment_form.phtml** - форма для настроек системы, которая выводится в "Кошельке" в секции настройки. В этой форме указываются служебные данные для взаимодействия с платежной системой.

Чтобы "Кошелек" нашел данный модуль, необходимо добавить код данного модуля в таблицу платежных систем "Кошелька" (**/resources/db/data/install_code.php**):
```
$datas = [
    [
        'title' => 'Yandex', //Название платежной системы
        'model' => 'WalletYandexPS_Model_PaymentMethodsYandex', //Основной класс модели
        'type' => 'url', //Тип - переход на внешний ресурс, form - ссылка на форму (нереализовано пока)
        'state_name' => 't', //неактивно, но тут планируется название state для перехода в него для совершения оплаты
        'url' => 'walletyandexps/mobile_walletyandex/find', //url откуда брать данные с настройками
        'code' => 'WalletYandexPS', //уникальный код, по которому осуществляется поиск. Должен совпадать с названием папки модуля
    ]
];
```

Настройки таблицы данного модуля находятся в **WalletYandexPS/resources/db/schema/wallet_payment_systems_yandex.php**, поля **wallet_payment_systems_yandex_id** и **wallet_id** обязательны, остальные поля для служебных данных. 

**/resources/translations/default/** - там находятся файлы локализации. По умолчанию используется **default**, но можно и другие локали (ru,en, tr & etc). Фразы, которые должны быть выведены в приложении необходимо так же поместить в **mobile.csv.list.**

**WalletYandexPS/controllers/** контроллеры для работы модуля. **AdminController.php** для административной части, **Mobile/YandexController.php** для мобильной части.

С **AdminController.php** все просто, там получение, обновление и добавление данных в настроечную таблицу.

**Mobile/YandexController.php** должен содержать метод **createformAction()** - в данном метода необходимо сформировать ссылку на оплату, и вернуть в такой структуре:
```
$data['payment_url']=$response->confirmation->confirmation_url;
$data['success']=true;
```
если платеж создан, либо 

```
$data['success']=false;
```
если произошла ошибка. Обратите внимание, что при создании платежа создается объект
```
					$history = new Wallet_Model_PaymentHistory();
					$history
						->setWalletId($wallet->getId())
						->setWalletCustomerId($params['wallet_customer_id'])
						->setSumm($params['amount'])
						->setCode('yandex')
						->setComplete(0)
						->save();
```
а при получении подтверждения от платежной системы в этот объект дописывается ```$history->setPaymentUrl($response->confirmation->confirmation_url)->setData('payment_id',$response->id)->save();```
либо **$history->setComplete(-1)->save();** в случае неудачи.
Именно **$history->getId()** передается в платежную систему для последущей идентификации оплаты при получении калбека с уведомлением об оплате от платежной системы.

В данном случае возврат из платежной системы происходит в метод **returnAction()**, в котором, в зависимости от статуса платежа, платеж переводится в успешный статус и создается транзакция, для зачисления на счет:
```
						$history->setComplete(1)->save();
						$wallet_customer->addTransaction($history->getSumm(),"Yandex - ".__("Deposit funds in the wallet"),'in',0,$wallet_customer->getId());
```
либо в неусешный статус 
```
$history->setComplete(-1)->save();
```
При любом результате, идет переадресация на адрес
```
						$this->_redirect('walletyandexps/mobile_yandex/result', array(
							'value_id' => $params['value_id'],
							'wallet_id' => $params['wallet_id'],
							'wallet_customer_id' => $params['wallet_customer_id'],
							'status' => 1, //но с разным статусом
						));	
```

Мобильная часть (ionic + angular) находится в **/resources/var/apps/modules/walletyandexps/**. Обратите внимание на подключения этих файлов в корневом init.php.

**walletyandexps/factories/walletyandexps.js** - factory для взаимодействия с мобильной и серверной части. Данная factory подключается в контроллере.

**/resources/var/apps/modules/walletyandexps/factories/walletyandexps.js** - контроллер, отвечающий за мобильную часть. Обратите внимание на подключение factory из предыдущего раздела.

Данный контроллер имеет два state:
```
App.config(function($stateProvider, HomepageLayoutProvider) {

    $stateProvider.state('walletyandex-payment', {
        url: BASE_PATH+"/walletyandexps/mobile_walletyandex/find/value_id/:value_id/wallet_id/:wallet_id/wallet_customer_id/:wallet_customer_id/amount/:amount",
        controller: 'WalletYandexPSController',
        templateUrl: "modules/walletyandexps/templates/l1/payment.html"
    });
    $stateProvider.state('walletyandex-payment-result', {
        url: BASE_PATH+"/walletyandexps/mobile_yandex/result/value_id/:value_id/wallet_id/:wallet_id/wallet_customer_id/:wallet_customer_id/status/:status",
        controller: 'WalletYandexPSResultController',
        templateUrl: "modules/walletyandexps/templates/l1/payment.html"
    });	

})
```
Первый state, это контроллер **WalletYandexPSController** - он имеет адрес **/walletyandexps/mobile_walletyandex/find/value_id:value_id/**. Метод find в ядре системы является базовым, поэтому этот контроллер считается контроллером по умолчани. Данный контроллер запускает создание платежа (через factory), получает ответ и в зависимости от ответа переадресовывает на URL оплаты, либо обрабатывает ошибку.

Обратите внимание, что контроллер **WalletYandexPSResultController** своим адресом совпадает с адресом и переданными в него параметрами из редиректа в **Mobile/YandexController.php**.

То есть, при срабатывании редиректа пользователя из платежной системы к нам на адресс **/walletyandexps/mobile_yandex/return**, проверяются платеж, совершаются все необходимые с ним действия, после чего происходит редирект на адрес **/walletyandexps/mobile_yandex/result**, в результате чего запускается AngularJS контроллер мобильной части **WalletYandexPSResultController**, который закрывает форму в приложении, выводит сообщение об успехе/неудачи и переходит в главное окно.

**/resources/var/apps/modules/walletyandexps/templates/l1/payment.html** - это шаблон мобильной части. Он совмещен в один, просто показывается разный контент в зависимости от состояния переменных.

