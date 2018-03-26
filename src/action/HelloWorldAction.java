package action;

import com.opensymphony.xwork2.ActionSupport;
import com.sun.org.apache.regexp.internal.recompile;

public class HelloWorldAction extends ActionSupport{
	private String user;
	private String password;

	public String execute() throws Exception{
		if("admin".equals(user)) {
			if("root".equals(password)) {
				return SUCCESS;
			}else {
				return ERROR;
			}
		}
		else {
			return ERROR;
		}
	}

	
	public String getUser() {
		return user;
	}


	public void setUser(String user) {
		this.user = user;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
