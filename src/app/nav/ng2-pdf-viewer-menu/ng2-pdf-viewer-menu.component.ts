import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2-pdf-viewer-menu',
  templateUrl: './ng2-pdf-viewer-menu.component.html',
  styleUrls: ['./ng2-pdf-viewer-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ng2PdfViewerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
