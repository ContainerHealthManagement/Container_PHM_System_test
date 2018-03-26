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
	private String type; //书类型
    private BookOper bo = new BookOper(); //查询类
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
    
	public String execute() throws Exception {
		// TODO Auto-generated method stub

        //查询结果放在request中

        ActionContext.getContext().put("booklist", bo.selectByType(type));

        //返回success指定的页面

        return SUCCESS; //"success"
	}
}
