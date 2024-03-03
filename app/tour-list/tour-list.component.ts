import { Component } from '@angular/core';
import { Tour } from '../models/tour';
import { Race } from '../models/race';
import { Tours } from '../models/tours';
import { OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent implements OnInit {
    private aapExtDomainURI: string = 'cyclists';
    newTourCyclist : string = "";
    newTourName : string = "";
    newTourPoints: number = 0;
    newTourAge: number = 0;
    cyclistId: string = "";
    newStageOneMinutes: number = 0;
    newStageOnePoints: number = 0;
    tours: Tours[] = []
    race : Race[] = []


    ngOnInit(): void {
        //let savedCyclists = localStorage.getItem("cyclists")
        //this.tours = savedCyclists ? JSON.parse(savedCyclists) : []
        console.log("Loaded")
        //throw new Error("Method not implimented")
     }

    addCyclist(){
        if(this.newTourCyclist.trim().length && this.newTourAge){
            let newTour: Race = {
                //id: Date.now(),
                stageoneminutes: this.newStageOneMinutes,
                stageonepoints: this.newStageOnePoints
    
            }
            let newCyclist: Tour = {
                    // id: Date.now(),
                    name: this.newTourName,
                    age: this.newTourAge,
                    pointstotal: this.newTourPoints,
                    stageoneminutes: this.newStageOneMinutes,
                    stageonepoints: this.newStageOnePoints,
                    tours: this.race
       
                }
                this.race.push(newTour)
                this.race.push(newTour)
                this.race.push(newTour)
                alert(this.race.length)
                console.log(this.race);
                this.newTourCyclist = "";
                this.newTourName = "";
                this.newTourAge = 0;
                //alert(this.tours.length)
        	//alert(this.newTourCyclist + " " + this.newTourAge)

                //serializing the typescript now
                localStorage.setItem("cyclists",  JSON.stringify(newCyclist) + JSON.stringify(this.race))
        }
    }
    deleteCyclist(index:number){
    	this.tours.splice(index, 1)
        localStorage.setItem("cyclists", JSON.stringify(this.tours))

    }



    tour: Tour = {
        name: "test",
        age: 1,
        pointstotal: 0,
        stageoneminutes:0,
        stageonepoints:0,
        tours:[]
    }
    
constructor(private httpClient: HttpClient){ }
	
    sendDataToAPI(){
        let newTour: Race = {
            //id: Date.now(),
            stageoneminutes: this.newStageOneMinutes,
            stageonepoints: this.newStageOnePoints

        }
            
            this.race.push(newTour)
            let newCyclist: Tour = {
                    //id: Date.now(),
                    name: this.newTourName,
                    age: this.newTourAge,
                    pointstotal: this.newTourPoints,
                    stageoneminutes: this.newStageOneMinutes,
                    stageonepoints: this.newStageOnePoints,
                    tours: this.race
       
                }
                this.tours.push(newCyclist)

                this.newTourCyclist = "";
                this.newTourName = "";
                this.newTourAge = 0;
                alert(this.race.length)
        	//alert(this.newTourCyclist + " " + this.newTourAge)

                //serializing the typescript now
                localStorage.setItem("cyclists", JSON.stringify(newCyclist))
    
    
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        const url = 'http://localhost:8080/tourapi/cyclists/'+'';
	    const cyclistInfo = JSON.stringify(newCyclist);
        console.log(cyclistInfo);
        return this.httpClient.post(url, cyclistInfo, {headers: headers}).subscribe(
            response => {

                console.log('Data sent successfuly:', response);
              },
             error =>{
              console.error('Error sending data:', error);
       		}
	);

     }
     updateDataToAPI(){
        
        let newTour: Race = {
            //id: Date.now(),
            stageoneminutes: this.newStageOneMinutes,
            stageonepoints: this.newStageOnePoints

        }
            
        this.race.push(newTour)
        let newCyclist: Tour = {
            
            name: this.newTourName,
            age: this.newTourAge,
            pointstotal: this.newTourPoints,
            stageoneminutes: this.newStageOneMinutes,
            stageonepoints: this.newStageOnePoints,
            tours:[]
            }

            this.newTourCyclist = "";
            this.newTourName = "";
            this.newTourAge = 0;
            //alert(this.tours.length)
            //alert(this.newTourCyclist + " " + this.newTourAge)

            //serializing the typescript now
            localStorage.setItem("cyclists", JSON.stringify(this.tours))


    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    const url = 'http://localhost:8080/tourapi/cyclists';
    const cyclistInfo = (JSON.stringify(newCyclist)+ JSON.stringify(this.tours));
    console.log(cyclistInfo);
    return this.httpClient.post(url, cyclistInfo, {headers: headers}).subscribe(
        response => {

            console.log('Data sent successfuly:', response);
          },
         error =>{
          console.error('Error sending data:', error);
           }
);

 }

}
