import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { db, auth } from './firebase';
import DataContainer from './dataContainer';
import './home.css';

export default function Home() {

    const [infos, setInfos] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(null);
    const [profileinfo, setProfileinfo] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setProfileinfo(authUser);
            }
            else {
                setProfileinfo(null);
            }
        })
        return () => {
            unsubscribe();
        }
    }, [profileinfo])

    useEffect(() => {

        db.collection('infos').onSnapshot(snapShot => {
            setInfos(snapShot.docs.map(doc => ({
                id: doc.id,
                info: doc.data()
            })));
        })

    }, [infos]);

    const handleUpload = (e) => {
        e.preventDefault();
        console.log("Hello");
        db.collection('infos').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            useid: profileinfo.uid,
            name: name,
            phone: phone
        });
        console.log("Hello");
        setName("");
        setPhone("");
    }

    return (
        <div className="container">
            <div className="content">
                <form>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                    <br />
                    <label>Phone</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                    />
                    <br />
                    <button className="submit" onClick={(e) => handleUpload(e)}>Submit</button>
                </form>

                {
                    infos.map(({ info, id }) => (


                        info.useid === profileinfo.uid ?
                            <DataContainer key={id} infoName={info.name} infoPhone={info.phone} />
                            : null
                    ))

                }
            </div>
        </div>
    )
}


