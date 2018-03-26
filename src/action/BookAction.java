package action;
import org.eclipse.jdt.internal.compiler.ast.ThrowStatement;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import oper.BookOper;
public class BookAction extends ActionSupport{
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String type; //������
    private BookOper bo = new BookOper(); //��ѯ��
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
    
	public String execute() throws Exception {
		// TODO Auto-generated method stub

        //��ѯ�������request��

        ActionContext.getContext().put("booklist", bo.selectByType(type));

        //����successָ����ҳ��

        return SUCCESS; //"success"
	}
}
