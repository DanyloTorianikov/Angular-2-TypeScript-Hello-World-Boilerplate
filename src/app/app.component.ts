import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <template [ngTemplateOutlet]="recurs" [ngOutletContext]="{ $implicit: data }"
      ></template>
    </div>

    <template #recurs let-list>
      <ul>
        <li *ngFor="let item of list">
          <div class="flex">
            <span *ngIf="item.children" (click)="toggle(item)" [innerHTML]="item.isHidden ? '+' : '-'"></span>
            <div [innerHTML]="(item.termHtml || item.term)"></div>
            <span class="padding-left" *ngIf="item.count || item.count === 0">count -</span>
            <span [innerHTML]="item.count"></span>
          </div>
            <template *ngIf="item.children && !item.isHidden"
                      [ngTemplateOutlet]="recurs"
                      [ngOutletContext]="{ $implicit: item.children}"
            ></template>
        </li>
      </ul>
    </template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: Item[] = [
    {
      term: "t1",
      termHtml: "<b>T1</b>",
      count: 1,
      children: [
        {
          term: "t1.1",
          count: 2,
          children: [
            {
              term: "t1.1.1",
              count: 3,
              children: [{ term: "t1.1.1.1" }, { term: "t1.1.1.2" }]
            },
            {
              term: "t1.1.2",
              count: 0
            }
          ]
        },
        {
          term: "t1.2",
          count: 4
        }
      ]
    },
    {
      term: 2,
      count: 5,
      children: [
        {
          term: "t2.1",
          count: 2
        },
        {
          term: "t2.2",
          children: [{ term: "t2.2.1" }, { term: "t2.2.2" }]
        }
      ]
    }
  ];

  public toggle(item: Item): void {
    item.isHidden = !item.isHidden;
  }
}

export class Item {
  term: string | number;
  termHtml?: string;
  count?: number;
  children?: Item[];
  isHidden?: boolean;
}
