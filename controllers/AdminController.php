<?php
class WalletYandexPS_AdminController extends Admin_Controller_Default
{

	
	
	/*обновление настроек*/
	public function saveAction()
	{
		if($datas = $this->getRequest()->getPost()) {
            try {
				if ($this->getSession()->getAppId()) $app_id = $this->getSession()->getAppId(); else $app_id=$this->getApplication()->getId();

				$db =Zend_Db_Table_Abstract::getDefaultAdapter();
				$stmt = $db->query(
					'SELECT * FROM application_option WHERE code = ?',
					array('wallet')
				);
				$option_id = $stmt->fetch()['option_id'];
				$stmt = $db->query(
					'SELECT * FROM application_option_value WHERE option_id = ? and app_id = ?',
					array($option_id, $app_id)
				);
				$value_id = $stmt->fetch()['value_id'];
				$wallet = new Wallet_Model_Wallet();
				$wallet->find(array("value_id" => $value_id));
				
				$yandex = new WalletYandexPS_Model_PaymentMethodsYandex();
				if ($datas['yandex_id']!="") {
					$yandex->find($datas['yandex_id']);
				}

				$yandex->setData($datas)->save();
				
                $html = [
                    'datas' => $datas,
                    'success' => '1',
                    'success_message' => __('Settings successfully saved'),
                    'message_timeout' => 2,
                    'message_button' => 0,
                    'message_loader' => 0
                ];
	
	
            }
            catch(Exception $e) {
                $html = [
                    'error' => 1,
                    'message' => $e->getMessage(),
                    'message_button' => 1,
                    'message_loader' => 1
                ];
            }	
            $this->_sendHtml($html);

        }
	}
	


}