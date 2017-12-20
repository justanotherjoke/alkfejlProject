import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { Issue } from "../issue";
import { IssueService } from "../issue.service";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue = new Issue();

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.issue = await this.issueService.getIssue(id);

    this.route.paramMap
      .switchMap(async (params: ParamMap) => {
        const id = +params.get('id');
        this.issue = await this.issueService.getIssue(id);
        return Observable.of({});
      })
      .subscribe();
  }

}
