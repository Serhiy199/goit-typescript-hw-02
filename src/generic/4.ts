/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T extends IProps> {
  constructor(public props: T) {}
}
interface IProps {
  title: string;
}
class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { IProps, Page };
