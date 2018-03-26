package action;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;

import oper.ContainerStatusOper;
import po.Container_health;

public class ContainerStatusAction extends ActionSupport{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Container_health> result;
	
	public List<Container_health> getResult() {
		return result;
	}


	public void setResult(List<Container_health> result) {
		this.result = result;
	}


	public String executeAjax() {
		try {
			ContainerStatusOper containerstatusOper = new ContainerStatusOper();
			result = containerstatusOper.selectBynull();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	return SUCCESS;
	}
}
