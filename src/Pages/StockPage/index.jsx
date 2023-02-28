import Card from 'Components/Card';
import Content from 'Components/Content';
import NotFound from 'Pages/NotFound';
import Main from 'Layouts/Main';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './StockPage.module.scss'
import { formatter } from 'Middleware/Formatter';
import { Helmet } from 'react-helmet';
import SideNav from 'Components/Sidenav';
import GetInflation from 'Middleware/GetInflation';
import GetSelic from 'Middleware/GetSelic';

export default function StockPage() {
    const [stock, setStock] = useState([]);
    const params = useParams();

    useEffect(() => {
        const result = async () => {
            let data = await fetch(`https://brapi.dev/api/quote/${params.id}?fundamental=true&dividends=true`)
                .then(response => response.json())
                .catch(err => console.error(err))

            return data.results
        }
        result().then(data => setStock(data))
    })

    if (!stock) {
        return <NotFound />
    }
    return (
        <>
            <Helmet>
                <title>
                    {`Financial Market | ${stock.map(e => e.longName)}`}
                </title>
            </Helmet>
            <Main>
                <Content>
                    <div className={styles.showStock}>
                        {stock.map((e, index) => (
                            <Card key={index}>
                                <div className={styles.__header}>
                                    <img src={e.logourl}
                                        alt={`${e.symbol} logo`}
                                        title={`${e.symbol} Logo`} />
                                    <h1>
                                        {e.longName}
                                    </h1>
                                </div>
                                <div className={styles.__body}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>paper</th>
                                                <td>{e.symbol}</td>
                                                <th>market price</th>
                                                <td>{formatter.format(e.regularMarketPrice)}</td>
                                            </tr>
                                            <tr>
                                                <th>company</th>
                                                <td>{e.shortName}</td>
                                                <th>low last 52 weeks</th>
                                                <td>{formatter.format(e.fiftyTwoWeekLow)}</td>
                                            </tr>
                                            <tr>
                                                <th>market cap</th>
                                                <td>{formatter.format(e.marketCap)}</td>
                                                <th>high last 52 weeks</th>
                                                <td>{formatter.format(e.fiftyTwoWeekHigh)}</td>
                                            </tr>
                                            <tr>
                                                <th>price earnings</th>
                                                <td>{formatter.format(e.priceEarnings)}</td>
                                                <th>earnings per share</th>
                                                <td>{formatter.format(e.earningsPerShare)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Content>
                <SideNav>
                    <Card>
                        <GetInflation />
                    </Card>
                    <Card>
                        <GetSelic />
                    </Card>
                </SideNav>
            </Main>
        </>
    )
}
