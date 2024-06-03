import { Component, OnInit, OnDestroy } from '@angular/core';
import { RobotService } from 'src/app/service/robot.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';

interface Robot {
  x: number;
  y: number;
  direction: 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
}

@Component({
  selector: 'app-robot-control',
  templateUrl: './robot-control.component.html',
  styleUrls: ['./robot-control.component.css']
})
export class RobotControlComponent implements OnInit, OnDestroy {
  script: string = 'POSITION 1 3 EAST\n' +
    'FORWARD 3\n' +
    'WAIT\n' +
    'TURNAROUND\n' +
    'FORWARD 1\n' +
    'RIGHT\n' +
    'FORWARD 2';
  robot: Robot = { x: 0, y: 0, direction: 'SOUTH' };
  grid: string[][] = [];
  private destroy$ = new Subject<void>();

  constructor(private robotService: RobotService) {
  }

  ngOnInit(): void {
    this.initializeGrid();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeGrid(): void {
    this.grid = Array.from({ length: 5 }, () => Array(5).fill(''));
  }


  submitScript(): void {
    if (!this.script) {
      return;
    }

    this.robotService.moveRobot(this.script)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: Robot) => {
          this.robot = data;
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Robot moved successfully!',
            timer: 3000,
            toast: true,
            position: 'top-end',
            showConfirmButton: false
          });
        },
        error: (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.error.message,
            timer: 3000,
            toast: true,
            position: 'top-end',
            showConfirmButton: false
          });
        }
      });
  }
}
