import MainNews from "../New/MainNews";
import SubNews from "../New/SubNews";
import TopTitle from "../New/TopTitle";
import { API_URL } from "../../config/Constants";
import { useState, useEffect } from "react";

export default function Article({ articles, reload }) {

    const [articlesList, setArticlesList] = useState([])
    useEffect(() => {
        try {
            const getArticlesList = async () => {
                const response = await fetch(API_URL + '/api/articles/getListArticles', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: undefined,
                    },
                });
                const json = await response.json();
                setArticlesList(json.data);
                console.log(articlesList)
            }
            getArticlesList();

        } catch (e) {
            console.log(e)
        }
    }, []);

    return (
                <div>
                    < div className="sm:gap-5 mb-3">
                        {
                            articlesList.slice(0, 1).map((article) => (
                                article &&
                                    <MainNews data={article} />
                            ))
                        }
            
                    </div>
                    <hr className="border-gray-300 bg-gray-300" />
                    <div className="mt-5">
                        {
                            articlesList.slice(1, 5).map((article) => (
                                article &&
                                    <SubNews data={article} />
                            ))
                        }
                    </div>
                </div> 
    )
}