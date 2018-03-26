package action;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.Result;
import com.sun.xml.internal.bind.v2.schemagen.xmlschema.List;

import javafx.scene.control.Alert;
import oper.BookOper;
import oper.ContainerlocationOper;
import po.Container_location;

public class ContainerAction extends ActionSupport{
	//private String xhdm;//���Ӻ���
    private ContainerlocationOper container = new ContainerlocationOper(); //��ѯ��
	private java.util.List<Container_location> result;
    private String xhdmnumber;
    
	public String getXhdmnumber() {
		return xhdmnumber;
	}

	public void setXhdmnumber(String xhdmnumber) {
		this.xhdmnumber = xhdmnumber;
	}

	public ContainerlocationOper getContainer() {
		return container;
	}
	
	public void setContainer(ContainerlocationOper container) {
		this.container = container;
	}
	
	

	public java.util.List<Container_location> getResult() {
		return result;
	}

	public void setResult(java.util.List<Container_location> result) {
		this.result = result;
	}

	public String executeAjax(){
		// TODO Auto-generated method stub
		try {
			//��ȡǰ̨���ݹ���������
			ContainerlocationOper containerlocationOper = new ContainerlocationOper();
			result = containerlocationOper.selectByXhdm(xhdmnumber);
			
			
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

        //����successָ����ҳ��

        return SUCCESS; //"success"
	}
	
	
}
