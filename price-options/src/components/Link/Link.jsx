
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className="mr-10 hover:bg-blue-500 text-center p-2 px-4 w-full">
                <a href={route.path}>{route.name}</a>
                 </li>
        </div>
    );
};

Link.propTypes={
    route:PropTypes.object
}
export default Link;