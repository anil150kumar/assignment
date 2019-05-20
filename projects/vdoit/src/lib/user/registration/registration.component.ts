//declare var finalize : any
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder,FormGroup ,Validators} from '@angular/forms'; 
import {AuthService} from '../auth.service'
import { CountriesService} from '../update.service'
import {Router} from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import {Observable} from 'rxjs'
import {  finalize } from 'rxjs/operators';


import { AngularFirestore} from '@angular/fire/firestore'


@Component({
  selector: 'enl-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  userForm : FormGroup;
  loading = false;
  submitted = false;
  data;
  stateInfo= [];
  countryInfo = [];
  cityInfo = [];
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  //downloadURL: Observable<string>;
  uploadState: Observable<string>;
  downloadURL : Observable<string>
  selectCountry
  selectCity
  selectState
  selectedCountry;
  selectedState;
    SelectedCity
  url :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
image
  constructor(private afStorage: AngularFireStorage,private form: FormBuilder,private country:CountriesService,private db: AngularFirestore,private router : Router,private authService: AuthService)
 { }

  ngOnInit() {
      
      this.userForm = this.form.group({
        name: ['',[Validators.required]],
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(5)]],
        organization:['',[Validators.required]],
        uploadImage : ['',[Validators.required]],
        selectCountry : ['',[Validators.required]],
        selectState : ['',[Validators.required]],
        selectCity : ['',[Validators.required]]
      });
      this.getCountries();  
  }
  get f() { return this.userForm.controls; }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    //this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
 
    this.uploadProgress = this.task.percentageChanges();
   //this.downloadURL = this.task.downloadURL();
   this.task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = this.ref.getDownloadURL()
      this.downloadURL.subscribe(url => (this.image = url));
    })
  )
  .subscribe();


  }
  getCountries(){
    this.country.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        return this.countryInfo
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue) {
    this.stateInfo=this.countryInfo[countryValue].States;
    this.cityInfo=this.stateInfo[0].Cities;
    return this.stateInfo
    //console.log(this.cityInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    return this.cityInfo
    //console.log(this.cityInfo);
  }
  login(){
    this.router.navigate(['/login'])
  }

   onSubmit(){
    this.submitted = true;


        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        const email = this.userForm.value.email;
        const password = this.userForm.value.password;
        this.selectCountry = parseInt(this.userForm.value.selectCountry),
        this.selectState=parseInt(this.userForm.value.selectState),
        this.selectCity=parseInt(this.userForm.value.selectCity)

        console.log(typeof(this.selectCountry));
        console.log(this.country.allCountries());
        this.country.allCountries().subscribe(data=>{
          let country = data.Countries[this.selectCountry]
          let state = country.States[this.selectState]
          
          this.selectedCountry = country.CountryName
          this.selectedState = state.StateName
          this.SelectedCity = state.Cities[this.selectCity]
          console.log(this.selectedCountry)
          console.log(this.selectedState)
          console.log(this.SelectedCity)
          var postt= async() =>{
            const doc_ref=await this.db.collection('user').add({
              
             email:this.userForm.value.email,
             //password:this.userForm.value.password,
             name:this.userForm.value.name,
             organization:this.userForm.value.organization,
             uploadImage : this.image,
             selectCountry : this.selectedCountry,
             selectState:this.selectedState,
             selectCity:this.SelectedCity,
             
             
           })
           this.authService.signupUser(email,password)
           this.router.navigate(['/login'])
           return doc_ref.id
         }
         postt().then(res=>
           {
             console.log(res)
           })
        })
         this.loading = true;
      
            
    }
}
