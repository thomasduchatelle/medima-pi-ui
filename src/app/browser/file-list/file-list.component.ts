import {Component, Input} from '@angular/core';
import {File} from '../domain';
import {FileController} from '../file-controller.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.less']
})
export class FileListComponent {

  @Input() files: File[];
  @Input() parentFile: string;

  constructor(private fileController: FileController){}

  public isDir(file: File): boolean {
    return file.type == 'dir';
  }

  public isPlayable(file: File): boolean {
    return file.type == 'media' && file.playable
  }

  public play(file: File) {
    this.fileController.playMedia(file.pathId);
  }
}