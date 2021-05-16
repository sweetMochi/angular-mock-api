import { HttpResponse } from '@angular/common/http'
import { of } from 'rxjs'
import { environment } from 'src/environments/environment'



export default {
	GET: {
		[environment.api + '/users']: {
			handler: allUser
		}
	},
	PATCH: {
		[environment.api + '/posts/1']: {
			handler: patchUser
		}
	}
}

function allUser() {
	return of(
		new HttpResponse(
			{
				status: 200,
				body:  [
					{
						id:1,
						name: "Viktor"
					},
					{
						id: 2,
						name: "John"
					}
    			]
			}
		)
	)
}

function patchUser() {
	return of(
		new HttpResponse(
			{
				status: 200,
				body:  {
					userId: 1
				}
			}
		)
	)
}
