import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class CountriesService {
    private http;
    url: string;
    constructor(http: HttpClient);
    allCountries(): Observable<any>;
}
