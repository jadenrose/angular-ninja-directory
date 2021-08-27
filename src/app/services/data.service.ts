import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  fetchNinjas = async () => {
	const res = await fetch('https://nn-angular-92468-default-rtdb.firebaseio.com/ninjas/.json')
	return await res.json()
}
}
