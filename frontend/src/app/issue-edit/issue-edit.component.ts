import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { Issue } from "../issue";
import { IssueService } from "../issue.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap(async (params: ParamMap) => {
      const id = params.get('id');
      this.issue = id !== null 
        ? await this.issueService.getIssue(+id)
        : new Issue();
      return Observable.of({});
    })
    .subscribe();
  }

  async onFormSubmit(issue: Issue) {
    if (issue.id > 0) {
      await this.issueService.updateIssue(issue.id, issue);   
    } else {
      await this.issueService.addIssue(issue);
    }
    this.location.back();
  }

}
