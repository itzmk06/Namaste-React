import { useOnlineStatus } from "../utils/useOnlineStattus";
const Offline=()=>{
    return(
        <div className="offline-page">
            <div className="offline-content">
                <h1>Looks like you're offline!</h1>
            </div>
        </div>
    );
};
export default Offline;