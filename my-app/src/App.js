import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/' + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function App() {
  const topics = [
    { id: 'html', title: 'html', body: 'html is ...' },
    { id: 'css', title: 'css', body: 'css is ...' },
    { id: 'js', title: 'js', body: 'js is ...' },
  ];
  return (
    <div>
      <Header
        title="WEB"
        onChangeMode={() => {
          alert('Header');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(props) => {
          alert(props);
        }}
      ></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
