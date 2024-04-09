/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component {
  constructor(public props: T) {}
}
interface IProps {
  props: string;
}
class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
