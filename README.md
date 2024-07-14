
# sleek-drag-and-drop

Easily implement interactive drag and drop functionality in your React applications with Sleek Drag and Drop. This comprehensive package leverages Tailwind CSS for styling, allowing you to create highly customizable and visually appealing drag and drop experiences.



## Documentation

### Key Features:

#### Customizable Components:
Tailor the drag and drop elements to fit your application's design and requirements.

#### Dynamic Item Rendering:
Effortlessly render items dynamically using your preferred component functions.

#### Drag Context:
Utilize a powerful DragContext component to manage drag states and behaviors across your application.

#### Seamless Integration:
Integrate with existing projects with minimal configuration and code changes.

#### Flexible and Extendable:
Built to be flexible and easily extendable to accommodate complex drag and drop scenarios.


## Installation

#### Create a react project

```bash
npx create-react-app my-app
cd my-app
```
#### Install the package with npm or yarn

```base
npm i sleek-drag-and-drop
yarn add sleek-drag-and-drop
```

### For styling install tailwindcss

```base
npm i -D tailwindcss
npx tailwindcss init
```
## Usage/Examples

#### 1. import <DragDropContextProvider>

```javascript
import { DragDropContextProvider } from 'sleek-drag-and-drop'

```

#### 2. import [ DragContext ] and [ DropContext ]

```javascript
import { DragContext, DropContext } from 'sleek-drag-and-drop'

```

#### 3. Wrap the <DragContext/> and <DropContext/> inside <DragDropContextProvider>

```javascript
import { DragDropContextProvider, DragContext, DropContext } from 'sleek-drag-and-drop'

export function app(){

    const vegetables = [
        {id:1, name:"potato"},
        {id:2, name:"tomato"},
        {id:3, name:"capsicum"}
    ]

    return (
        <DragDropContextProvider>
            <div>
                <DragContext content={vegetables} />
            <div/>
            <div>
                <DropContext />
            <div/>
        </DragDropContextProvider>
    )
}

```
## Props

#### 1. content:[array]
The array of items you want to render in the draglist.

```javascript 
// array of objects containing id and name

    const vegetables = 
    [
        {id:1, name:"potato"},
        {id:2, name:"tomato"},
        {id:3, name:"capsicum"}
    ]

```

``` javascript
// pass the array like this

    <DragContext content={vegetables} />

```

#### 2. className:[string]

You can pass `className` for styling the draggable list items.

```javascript
<DragContext className="bg-blue-700 rounded-xl">
<DropContext className="bg-red-300 w-[5rem] rounded-xl">
```

#### 3. deleteKey:[boolean]

if you want a delete button in the droplist items you can pass `deleteKey`

```javascript
<DropContext deleteKey={true} >
```

## Tech Stack

**Client:** React, ContextAPI, TailwindCSS

## Acknowledgements

#### Open-Source Contributions
To contribute to this package check out the github repository:

 - [Github](https://github.com/mr-dev-prince/sleek-drag-and-drop)

#### Query 
For any queries, please contact on linkedIn:
 - [Linkedin](https://www.linkedin.com/in/princechaurasia/)


## Authors

- [@mr-dev-prince](https://github.com/mr-dev-prince)


## 🚀 About Me

![Prince Chaurasia](https://i.ibb.co/HH3jrY5/Whats-App-Image-2024-07-15-at-00-39-32.jpg)


### Hi,
#### I'm `Prince Chaurasia`, a passionate software developer specializing in React Native and web development.Currently in my 4th semester of a B.Tech program, I am dedicated to expanding my skills and knowledge in the tech industry.

I am actively working on several projects, including a React Native application named 'chillx' and a versatile npm package called `'sleek-drag-and-drop'` for implementing interactive drag and drop functionality in React applications. My projects reflect my commitment to creating efficient, user-friendly solutions with a strong emphasis on clean code and best practices.

I enjoy tackling challenging problems and am always eager to learn new technologies and methodologies. When I'm not coding, you can find me preparing for my exams, exploring the latest tech trends, or contributing to open-source projects.