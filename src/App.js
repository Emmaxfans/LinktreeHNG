import './App.css';

function App() {
  return (
    <div className="App container">

      <img src='./images/share.png' alt='share-linktree' className='share-img'/>
      <img src='./images/more.png' alt='share-linktree' className='share1-img'/>

      <div className='text-center'>
      <img src='./images/profile-img.png' alt='profile-img' className='profile-img text-center' id='profile__img'/>
      <p className='p1'>Emmanuel Adewoye</p>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
            <p className='pt-4 text-center' id='twitter'>
              <a href='https://twitter.com/_Emmaxfans'>
            Twitter Link
            </a>
            </p>
            
          </div>

        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
            <p className='pt-4 text-center' id='btn__zuri'>
              <a href='https://training.zuri.team'>
            Zuri Team
            </a>
            </p>
            
          </div>

        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
            <p className='pt-4 text-center' id='books'>
              <a href='https://books.zuri.team/'>
            Zuri Books
            </a>
            </p>
            
          </div>

        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
            <p className='pt-4 text-center' id='books__python'>
              <a href='https://books.zuri.team/python-for-beginners?ref_id=<Emmanuel Adewoye>'>
            Python Books
            </a>
            </p>
            
          </div>

        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
            <p className='pt-4 text-center' id='pitch'>
              <a href='https://background.zuri.team/'>
            Background Check for coders
            </a>
            </p>
            
          </div>

        </div>

        <div className='row'>
          <div className='col-lg-12 md-6 sm-6  con1'>
            <p className='pt-4 text-center' id='book_design'>
              <a href='https://books.zuri.team/design-rules'>
            Design Books
            </a>
            </p>
            
          </div>

        </div>
      </div>

      <div className='text-center con2'>
        <a href='https://app.slack.com/'>
        <img src='./images/slack.png' alt='slack-logo' className='slack-img'/>
        </a>
        <a href='https://github.com/Emmaxfans'>
        <img src='./images/github (2).png' alt='github-logo' className='git-img'/>
        </a>

      </div>

      <div className='container-fluid con3'>
        <div className='row'>
          <div className='col-lg-4 md-4 sm-4'>

          <a href='/#'><img src='./images/zuri1.svg' alt='zuri-logo' className='zuri-img'/></a>

          </div>

          <div className='col-lg-4 md-4 sm-4'>
          <p className='p2'>HNG Internship 9 Frontend Task</p>
          </div>

          <div className='col-lg-4 md-4 sm-4'>
          <a href='/#'><img src='./images/ingressive.webp' alt='slack-logo' className='ingressive-img img-fluid'/></a>
          </div>


         </div>

      </div>
      
    </div>
  );
}

export default App;
