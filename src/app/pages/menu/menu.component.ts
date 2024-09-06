import { FlatTreeControl } from '@angular/cdk/tree'
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'

// import { routes } from '../../app.routes'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ItemState } from '../../store/menu.reducer'
import { MenuService } from '../../services/menu.service'

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean
  name: string
  path: string
  level: number
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, AfterViewInit {
  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path: node.path,
      level: level
    }
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  )

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  )

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener)
  


  constructor(
    private router: Router,
    private store: Store<{ menu: ItemState }>,
    private menuService: MenuService
  ) {
    store.select('menu').subscribe((val) => {
      this.dataSource.data = val.list
    })
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable

  menuClick(e: MenuNode) {
    // console.log(e)
    this.router.navigate([e.path])
  }

  setting(){

    this.menuService.openSet('open')
  }

  ngAfterViewInit(): void {
    // console.log(this.menu$, '#############')
  }

  ngOnInit(): void {
    // this.dataSource.data = this.filterRouter(routes, '')
  }
}
