import "./App.css";

function App() {
  var names = require("arabic-personal-names");
  console.log(names.female.length);

  return (
    <div className="container">
      <h1 className="text-center h2 w-75">
        اللهم أخرج المولود سالماً سليماً عافياً متعافياً، لا شرّ فيه ولا ضر،
        اللهم ّواجعله من عبادك الصّالحين، وجنّبه الشيطان، واجعله نصرة وذخراً
        وخيراً للإسلام والمسلمين
      </h1>
      <ul>
        <div className="row">
          {names.female.map((name) => (
            <div className="col-md-3">
              <li key={name.id}>{name} هشام بكرى</li>
            </div>
          ))}
        </div>
      </ul>
      <footer className="d-flex justify-content-center">
        <a href="https://www.facebook.com/Moha.Hendawy" className="text-capitalize text-center d-block h3">henda@wy</a>
        <h4>        😜😂   حاجه بسيطه يا اتش انت اخونا الصغير 
</h4>
      </footer>
    </div>
  );
}

export default App;
