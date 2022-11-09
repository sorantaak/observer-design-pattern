import PropTypes from 'prop-types';
import { memo } from 'react';
import { FixedSizeList as List } from 'react-window';

const TodoItem = ({ data ,index , style }) => {
    return (
        <div style={style}>{data[index]}</div>
    )
}


const TodosList = ({todos}) => {
    console.log('child component is rendering');
    return (
        <>
            <div>
                <h2>My Todos</h2>
                {/* {
                    todos.map((todo, index) => {
                        return <p key={index}>{todo}</p>;
                    })
                } */}
                <List
                    itemData={todos}
                    itemCount={todos.length}
                    itemSize={20}
                    height={100}
                >
                    {TodoItem}
                </List>
            </div>
        </>
    )
}


TodosList.propTypes = {
    todos : PropTypes.array.isRequired
}

export default memo(TodosList);