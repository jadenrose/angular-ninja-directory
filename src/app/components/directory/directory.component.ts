import { Component, OnInit } from '@angular/core'
import { LoggingService } from '../../services/logging.service'
import { DataService } from '../../services/data.service'
declare var firebase: any

@Component({
    selector: 'app-directory',
    templateUrl: './directory.component.html',
    styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
    ninjas: [] = []
    term: string = ''

    constructor(private logger: LoggingService, private data: DataService) {}

    getNinjas = async () => {
        this.ninjas = await this.data.fetchNinjas()
    }

    logIt() {
        this.logger.log()
    }

    ngOnInit(): void {
		this.getNinjas()

		this.fbGetData()
	}

	fbGetData() {
		firebase.database().ref('/ninjas/').on('child_added', (snapshot: any) => {
			console.log(snapshot)
		})
	}
}
