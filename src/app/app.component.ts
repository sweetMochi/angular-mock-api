import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPatched } from './core/user-patched';
import { Users } from './core/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	/** 使用者列表 */
	users = this.http.get(environment.api + '/users') as Observable<Users[]>;

	/** 已更新的使用者序號 */
	userIdPatched: number;

	constructor(
		private http: HttpClient
	) {}


	/**
	 * 更新使用者資料
	 * @param id 使用者序號
	 */
	patchUser( id: number ) {
		this.http.patch(
			environment.api + '/posts/1',
			null
		).subscribe( ( data: UserPatched ) => {
			this.userIdPatched = id;
		});
	}
}
