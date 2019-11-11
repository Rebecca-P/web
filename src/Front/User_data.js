class User_data
{
    constructor(){
        this.state ={
          nameUser : '',
          pictureUser: '',
          numberGame: 10,
          level : 0,
          xp:0,
          hourAll: 0,
          
          games : [
            
          ],
         
    
          friends : [
            
          ],
        };
    }

    addUserName = (e, { name }) => this.setState({ nameUser: name })
    addUserPicture = (e, { picture }) => this.setState({ pictureUser: picture })
    addUserGame = (e, { game }) => this.setState({ numberGame: game })
    addUserLevel = (e, { lvl }) => this.setState({ level: lvl })
    addUserXp = (e, { xp_ }) => this.setState({ xp: xp_ })
    addUserHour = (e, { hour }) => this.setState({ hourAll: hour })
    addUserAllGames = (e, { allgames }) => this.setState({ games: allgames })
    addUserAllFriends = (e, { allfriend }) => this.setState({ friends: allfriend })
}

export default User_data;