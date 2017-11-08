import {Blog} from '../model/blog'

export const BLOGS: Blog[]= [
    { 
        id: 11,
        title: '10 Signs You Should Invest In Internet',
        describe: 'Even though using "lorem ipsum" often arouses curiosity due to its resemblance to classical Latin...',
        image:'../assets/images/f1.jpg',
        content: 'Even though using "lorem ipsum" often arouses curiosity due to its resemblance to classical Latin, it is not intended to have meaning. Where text is visible in a document, people tend to focus on the textual content rather than upon overall presentation, so publishers use lorem ipsum when displaying a typeface or design in order to direct the focus to presentation. "Lorem ipsum" also approximates a typical distribution of spaces in English.',
        createdTime: new Date(),
        author: 'admin'
    },
    {
        id: 12,
        title: '14 Common Misconceptions About Internet',
        describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis feugiat urna...',
        image:'../assets/images/f2.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis feugiat urna, consectetur pellentesque mi commodo ac. Curabitur non ante at diam dapibus maximus id in risus. Nulla consequat dignissim metus id suscipit. Morbi in risus sodales, sagittis nisl vel, finibus nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque in metus nunc. Nunc fermentum lectus eget risus finibus ullamcorper. Suspendisse turpis orci, condimentum mollis purus non, tempor facilisis libero. Morbi quis augue sollicitudin, mollis nunc sit amet, fringilla risus. Integer vitae lectus ut nisi posuere placerat at eu purus. Vestibulum vitae erat ac metus suscipit volutpat. Duis sagittis feugiat metus. Sed sed faucibus lacus. Nunc non arcu sed leo volutpat tempus.',
        createdTime: new Date(),
        author: 'admin' 
    },
    {
        id: 13, 
        title: 'Why We Love Internet (And You Should, Too!)', 
        describe: 'Mauris a nisi vehicula, malesuada libero eget, dictum sem. Cras sollicitudin sed purus sed hendrerit...',
        image:'../assets/images/f3.jpg', 
        content: "Mauris a nisi vehicula, malesuada libero eget, dictum sem. Cras sollicitudin sed purus sed hendrerit. Nam scelerisque, tellus eu eleifend rutrum, dui odio venenatis est, et consequat lectus arcu in felis. Vestibulum ut pulvinar quam, in lobortis nunc. Duis consequat mi in sem pretium, eget placerat orci tempor. Nullam egestas justo quis ullamcorper ultricies. In sed erat ornare, dapibus mi a, pellentesque quam. Maecenas eget facilisis turpis. Etiam lobortis convallis mi in lobortis. Cras pulvinar volutpat facilisis. Donec nisi purus, rhoncus et mattis non, dignissim quis risus. Integer blandit rhoncus massa, eu congue turpis placerat quis. Cras velit justo, ultricies aliquam pharetra sit amet, scelerisque sit amet arcu. Donec fringilla bibendum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nunc est, lacinia eu enim vel, cursus consequat nunc.", 
        createdTime: new Date(), 
        author: 'admin' 
    }
]