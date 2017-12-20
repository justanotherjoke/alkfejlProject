import { Injectable } from '@angular/core';
import { Issue } from "./issue";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable()
export class IssueService {

  issues: Issue[] = [
    {
      id: 1,
      location: 'PC5',
      description: 'Bad',
      status: 'ADDED',
    },
    {
      id: 2,
      location: 'PC3',
      description: 'Very bad',
      status: 'DONE'
    },
  ];

  constructor(
    private http: HttpClient
  ) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>('api/issue');
  }

  getIssuesSlowly(): Promise<Issue[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.issues);
      }, 4000)
    });
  }

  getIssue(id): Promise<Issue> {
    return this.http.get<Issue>(`api/issue/${id}`).toPromise();
  }

  addIssue(issue: Issue): Promise<Issue> {
    return this.http.post<Issue>(
      `api/issue`,
      issue,
      httpOptions
    ).toPromise();
  }

  updateIssue(id: number, issue: Issue): Promise<Issue> {
    return this.http.put<Issue>(
      `api/issue/${id}`,
      issue,
      httpOptions
    ).toPromise();
  }

}
