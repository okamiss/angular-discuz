import { FlatTreeControl } from '@angular/cdk/tree'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router'

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string
  path: string
  children?: FoodNode[]
}

const TREE_DATA: FoodNode[] = [
  {
    name: '首页',
    path: '/home'
  },
  {
    name: '直播管理',
    path: '/live',
    children: [
      { name: '直播签到统计', path: '/live/sign' },
      { name: '配置PK票数', path: '/live/pk' }
    ]
  },
  {
    name: '业绩统计',
    path: '/performance',
    children: [
      {
        name: '合规部',
        path: '',
        children: [
          { name: '子部门1', path: '' },
          { name: '子部门2', path: '' }
        ]
      },
      {
        name: '市场部',
        path: '',
        children: [
          { name: '子部门1', path: '' },
          { name: '子部门2', path: '' }
        ]
      }
    ]
  }
]

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean
  name: string
  path:string
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
export class MenuComponent {



  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      path:node.path,
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

  constructor(private router:Router) {
    this.dataSource.data = TREE_DATA
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable


  menuClick(e:FoodNode){
    console.log(e);
    this.router.navigate([e.path]);

  }
}
