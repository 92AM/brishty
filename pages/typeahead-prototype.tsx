import React, { useState } from 'react';
import { AsyncTypeahead, Menu, MenuItem } from 'react-bootstrap-typeahead';
import Layout from '../components/Layout';
import PageContentWrapper from '../components/PageContentWrapper';

const SEARCH_URI = 'https://api.github.com/search/users';

export default function TypeaheadPrototype() {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = (query: any) => {
        setIsLoading(true);

        fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=5`)
            .then((resp) => resp.json())
            .then(({ items }) => {
                const options = items.map((item: any) => ({
                    login: item.login,
                }));

                setOptions(options);
                setIsLoading(false);
            });
    };

    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true;

    const labelKey: any = 'login';

    const handleSearchInputKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            console.log('key up event fired, pressed enter!');
        }
    };

    return (
        <Layout title="Brishty - search for weather">
            <PageContentWrapper classNameCustomAttributes={'px-4 pt-20 pb-5 min-h-screen'}>
                <AsyncTypeahead
                    inputProps={{
                        className:
                            'rounded-l-full h-16 w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none',
                    }}
                    filterBy={filterBy}
                    className={'bg-gray-900'}
                    id="async-example"
                    isLoading={isLoading}
                    labelKey={labelKey}
                    minLength={4}
                    onSearch={handleSearch}
                    delay={100}
                    // useCache={true}
                    options={options}
                    placeholder="Search for a Github user..."
                    renderMenu={(option, props) => (
                        <Menu {...props}>
                            {option.map((each: any, index) => (
                                <div key={index} className={'flex flex-col'}>
                                    <MenuItem
                                        className={'p-2'}
                                        onClick={() => console.log('click!')}
                                        onChange={() => console.log('change event fired!')}
                                        onBlur={() => console.log('blur event fired!')}
                                        onKeyUp={handleSearchInputKeyUp}
                                        option={each}
                                        position={index}
                                        key={index}
                                    >
                                        {each.login}
                                    </MenuItem>
                                </div>
                            ))}
                        </Menu>
                    )}
                />
            </PageContentWrapper>
        </Layout>
    );
}
