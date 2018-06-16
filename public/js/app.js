const news = [
    {
        author: 'Author 1',
        text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        author: 'Author 2',
        text: ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
        author: 'Author 3',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];
const emptyNews = [];


const Article = (props) => {
    var {author, text} = props.data;
    return (
        <div className='article'>
            <p className='news__author'>{author}:</p>
            <p className='news__text'>{text}</p>
        </div>
    )
};


const News = (props) => {
    const {data} = props;
    let newsTemplate;
    if (data.length > 0) {
        newsTemplate = data.map(function (item, index) {
            return (
                <div key={index}>
                    <Article data={item}/>
                </div>
            )
        });
    }
    else
        newsTemplate = <p>Empty news</p>;
    return (
        <div className="news">
            {newsTemplate}
            <strong className={'news__count ' + (data.length > 0 ? '':'none') }>Total: {data.length}</strong>
        </div>
    );
};

const Comments = () => (
    <div className="comments">
        Empty comments
    </div>
);

const App = () => (
    <div className="app">
        App title
        <News data={news}/>
        <Comments/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);