package action;
import java.util.List;


import com.opensymphony.xwork2.ActionSupport;

import oper.ContainerhealthOper;

import po.Container_health;

public class HealthAction extends ActionSupport{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String xhdm;
	private List<Container_health> result;
	
	
	public String getXhdm() {
		return xhdm;
	}


	public void setXhdm(String xhdm) {
		this.xhdm = xhdm;
	}


	public List<Container_health> getResult() {
		return result;
	}


	public void setResult(List<Container_health> result) {
		this.result = result;
	}


	public String executeAjax() {
		try {
			ContainerhealthOper containerhealthOper = new ContainerhealthOper();
			result = containerhealthOper.selectByXhdm(xhdm);
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
	return SUCCESS;
	}
}
