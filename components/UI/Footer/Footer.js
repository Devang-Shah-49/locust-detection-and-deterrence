import Link from "next/link"
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import classes from "./Footer.module.scss"

const Footer = () => {
    return (
        <div id="footer">
            <div className={classes.Footer}></div>
        </div>
    )
}

export default Footer