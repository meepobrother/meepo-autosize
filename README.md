# autosize for angular

- [autosize](https://github.com/jackmoore/autosize)

```ts
import { AutoSizeModule } from 'meepo-autosize';
@NgModule({
  imports: [
    AutoSizeModule
  ]
})
export class AppModule { }


```

```html
<textarea autoSize="80" class="weui-textarea"></textarea>
```

```ts
export class AppComponent implements OnInit {
  title = 'app';
}
```