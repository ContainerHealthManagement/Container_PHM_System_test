package action;
import java.util.List;
import com.opensymphony.xwork2.ActionSupport;

import oper.ContainerlevelOper;
import po.Container_level;
public class ContainerlevelAction extends ActionSupport{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Container_level> result;

	public List<Container_level> getResult() {
		return result;
	}

	public void setResult(List<Container_level> result) {
		this.result = result;
	}
	public String executeAjax() {
		try {
			ContainerlevelOper containerleveloper = new ContainerlevelOper();
			result = containerleveloper.selectBynull();
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
}
