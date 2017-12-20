import { Component, OnInit } from '@angular/core';
import { Issue } from "../issue";
import { IssueService } from "../issue.service";
import { AuthService } from '../auth.service';

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  selectedStatus: string = '';
  issues: Issue[] = [];
  filteredIssues: Issue[];

  constructor(
    private issueService: IssueService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.issueService.getIssues()
      .subscribe(issues => {
        this.issues = issues;
        this.filterIssues();
      });
  }

  onFilterChange(status: string) {
    this.selectedStatus = status;
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues = this.selectedStatus === ''
      ? this.issues
      : this.issues.filter(
          issue => issue.status === this.selectedStatus)
  }

}
