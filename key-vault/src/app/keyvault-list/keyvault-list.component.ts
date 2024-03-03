import { Component } from '@angular/core';
import { Keys } from '../models/keys';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenId } from '../models/token-id';

@Component({
  selector: 'app-keyvault-list',
  templateUrl: './keyvault-list.component.html',
  styleUrl: './keyvault-list.component.css'
})
export class KeyvaultListComponent implements OnInit {

  private aapExtDomainURI: string = 'keyvaultkeys';
  keyId: string = "";
  newKeyvaultname : string = "";
  newToken : string = "";
  newKey: string = "";
  keys: Keys[] = []

  ngOnInit(): void {

    //throw new Error("Method not implimented")
 }
  constructor(private httpClient: HttpClient){ }
  addKey(){

      let newKey: Keys = {
        name: this.newKeyvaultname,
        token: this.newToken,
        key: this.newKey
      }
          //console.log(this.newKey);

          //serializing the typescript now
          const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        const url = 'http://localhost:8080/api/keyvault/'+'';
	      const keyInfo = JSON.stringify(newKey);
        console.log(keyInfo);
       return this.httpClient.post(url, keyInfo, {headers: headers}).subscribe((response) => {localStorage.setItem("keys",  JSON.stringify(response)); console.log(response);});
       
}

getKey(){

  let keyId: TokenId = {
    _id: this.keyId,
  }
      console.log(this.keyId);

      //serializing the typescript now
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    const url = 'http://localhost:8080/api/keyvault/'+ this.keyId;
    const keyIdInfo = JSON.stringify(keyId);
    console.log(keyIdInfo);
    return this.httpClient.get(url).subscribe((response) => console.info(response));
  }

  updateKey(){
    let keyId: TokenId = {
      _id: this.keyId,
    }

    let newKey: Keys = {
      name: this.newKeyvaultname,
      token: this.newToken,
      key: this.newKey
    }
        //console.log(this.newKey);

        //serializing the typescript now
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
      });
      const url = 'http://localhost:8080/api/keyvault/'+ this.keyId;
      const keyInfo = JSON.stringify(newKey);
      console.log(keyInfo);
     return this.httpClient.put(url, keyInfo, {headers: headers}).subscribe((response) => { console.log(response);});
     
}
  
deleteKey(){
  let keyId: TokenId = {
    _id: this.keyId,
  }
      //console.log(this.newKey);

      //serializing the typescript now
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    const url = 'http://localhost:8080/api/keyvault/'+ this.keyId;
    const keyInfo = JSON.stringify(keyId);
    console.log(keyInfo);
   return this.httpClient.delete(url).subscribe((response) => { console.log(response);});
   
}


getTotal(){

  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  const url = 'http://localhost:8080/api/totalkeys';
  return this.httpClient.get(url).subscribe((response) => console.info(response));
}


getIndexes(){

  const headers = new HttpHeaders({'Content-Type': 'application/json'});
  const url = 'http://localhost:8080/api/getIndexes';
  return this.httpClient.get(url).subscribe((response) => console.info("MongoDB indexes:", response));
}
}