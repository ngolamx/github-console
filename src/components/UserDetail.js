import { Stack } from "@mui/material"
import { NavLink , Redirect, Route, Switch, useParams, useRouteMatch } from "react-router-dom"
import Followers from "./Followers"
import Following from "./Following"
import Repositories from "./Repositories"
import { UserProfile } from "./UserProfile"




export default function UserDetail() {
    let { path, url } = useRouteMatch()
    const params = useParams()
    const { username } = params
    return (
        <Stack>
            <UserProfile/>
            <Stack>
                <NavLink to={`/users/${username}/repositories`} activeClassName="active">Repositories</NavLink>
                <NavLink to={`/users/${username}/followers`} activeClassName="active">Followers</NavLink>
                <NavLink to={`/users/${username}/following`} activeClassName="active">Followings</NavLink>

            </Stack>
            <Switch>
                <Route path={path} exact render={() => <Redirect to={`${url}/repositories`}/>}/>
                <Route path={`${path}/repositories`} exact render={() => <Repositories username={username}/>}/>
                <Route path={`${path}/followers`} exact component={() => <Followers username={username}/>}/>
                <Route path={`${path}/following`} exact component={() => <Following username={username}/>}/>
            </Switch>
        </Stack>
    )
}