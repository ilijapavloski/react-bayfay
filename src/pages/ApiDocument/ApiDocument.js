import React from 'react';
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import Aux from "../../utils/aux";
import './ApiDocument.scss';

const ApiDocument = () => {

    return (
        <Aux>
            <CustomHeader title={'ERP / POS API DOCUMENT'}/>
            <div className='d-flex justify-content-center static-page-bg'>
                <div className='px-5 w-100 font-size-3 py-2 d-flex'>
                    <div className='api-doc-menu'>
                        <a href='#intro-sec'>Configuration</a>
                        <a href='#reading-sec'>Read live inventory</a>
                        <a href='#update-sec'>Update live inventory</a>
                    </div>
                    <div className='api-doc-content'>
                        <h2 className='py-2'>BayFay Store Admin inventory update API</h2>
                        <hr/>
                        <section id={'intro-sec'}>
                            <div className="magic-block-textarea">
                                <h4>Configuration:</h4>
                                <p><b>Create BayFay Setting page in the POS software.</b></p>
                                <ul>
                                    <li>Status button is a switch to ON and OFF the API calls.</li>
                                    <li>OFF - Stop API call from the POS software (In case any issue if you face in the
                                        client software (POS) we recommend to switch OFF the API calls).
                                    </li>
                                    <li>ON - Start API call from POS software.</li>
                                    <li><b>Store Key and Auth Token - Copy from Merchant / Sell App.</b>
                                        <ol>
                                            <li>Go to home screen and select a store.</li>
                                            <li>Go to store settings screen -&gt; Inventory Update API -&gt; tap API
                                                Keys.
                                            </li>
                                            <li>Copy Store Key and Auth Token.</li>
                                            <li>Save it in the POS software BayFay settings.</li>
                                        </ol>
                                    </li>
                                </ul>
                            </div>
                            <div className="img-sec">
                                <h4>Sample Setting Screen :</h4>
                                <img src={require('../../assets/images/screenshort2.jpg')}
                                     className='api-doc-screenshot' alt="Screen Short"/>
                            </div>
                        </section>
                        <section id={'reading-sec'}>
                            <div className="content-head">
                                <h2 className='pt-4 pb-1'>How to read live inventory products?</h2>
                            </div>
                            <hr/>
                            <div className="magic-block-textarea">
                                <p><b>To read merchant virtual store live inventory product status ( stock count ,
                                    price, offer etc ).</b></p>
                                <p><b>Note :</b> Accepts SKU code generated by bayfay.</p>
                            </div>
                            <div className="magic-block-textarea">
                                <table className="table-bordered w-100 api-doc-table">
                                    <thead>
                                    <tr className='bg-light-silver'>
                                        <th>Property</th>
                                        <th>Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>store_key</td>
                                        <td>Store Key - Copy Store Key from BayFay Merchant App
                                            -&gt; Login -&gt; Store
                                            -&gt; Settings -&gt; Under Inventory Update APIs -&gt; API Keys.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Prod_codes</td>
                                        <td>[Array] - Barcode ( UPC/EAN/SKU) ) number of each product.
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-30">
                                <h6 className='my-2'>Endpoint :</h6>
                                <div className="code">
                                    <div className="ml-0">
                                        <code className="fill-lighten0 col-xs-2">POST</code>
                                        <code className="col-xs-9">/api/read</code>
                                    </div>
                                </div>
                                <h6>Headers :</h6>
                                <div className="code">
                                    <div className="ml-0">
                                        <code className="col-xs-9">Authkey : {"{token}"}</code>
                                    </div>
                                </div>
                                <div className="code">
                                    <div className="ml-0">
                                        <code className="col-xs-9">Content-Type : application/json</code>
                                    </div>
                                </div>
                            </div>
                            <h6>Syntax:</h6>
                            <div>
                                <div className='code px-5'>
                                    <div className='code-silver'>{"{"}</div>
                                    <div className='json-content'>
                                        <span className="hljs-attr">"store_key"</span> :
                                        <span class="hljs-string">"Store Key"</span>
                                    </div>
                                    <div className='json-content'>
                                        <span class="hljs-attr">"prod_codes"</span> :
                                        <span class="hljs-string">"[EAN BARCODE, UPC BARCODE, etc]"</span>
                                    </div>
                                    <div>{"}"}</div>
                                </div>
                            </div>
                            <h6>Sample Body:</h6>
                            <div>
                                <div className='code px-5'>
                                    <div className='code-silver'>{"{"}</div>
                                    <div className='json-content'>
                                        <span className="hljs-attr">"store_key"</span> :
                                        <span className="hljs-string">"73209720-da08-11e9-9fdb-17d338ca88fb"</span>
                                    </div>
                                    <div className='json-content'>
                                        <span className="hljs-attr">"prod_codes"</span> :
                                        <span
                                            className="hljs-string">[ "4902430777698", "4902430791465","8132108618" ]</span>
                                    </div>
                                    <div>{"}"}</div>
                                </div>
                            </div>
                            <h6>Response :</h6>
                            <div>
                                <div className='code px-5'>
                                    <div className='code-silver'>{"{"}</div>
                                    <div className='json-content'>
                                        <span className="hljs-attr">"success"</span> :
                                        <span className="hljs-string">true</span>
                                    </div>
                                    <div className='json-content'>
                                        <span className="hljs-attr">"data"</span> :
                                        <span className='ml-3'>[</span>
                                        <div className='json-content inner-content'>
                                            <div className='code-silver'>{"{"}</div>
                                            <div className='json-content'>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"4902430777698"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"Ariel Matic Front Load Detergent Washing Powder"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"unit"</span> :
                                                    <span className="hljs-string">"2 KG"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"stock"</span> :
                                                    <span className="hljs-string">"52"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"selling_price"</span> :
                                                    <span className="hljs-string">"55"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"offer"</span> :
                                                    <span className="hljs-string">"4"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"tax"</span> :
                                                    <span className="hljs-string">"2"</span>
                                                </div>
                                            </div>
                                            <div>{"},"}</div>
                                        </div>
                                        <div className='json-content inner-content'>
                                            <div className='code-silver'>{"{"}</div>
                                            <div className='json-content'>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"4902430791465"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"Ariel Matic Front Load Detergent Washing Powder"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"unit"</span> :
                                                    <span className="hljs-string">"1 KG"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"stock"</span> :
                                                    <span className="hljs-string">"31"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"selling_price"</span> :
                                                    <span className="hljs-string">"55"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"offer"</span> :
                                                    <span className="hljs-string">"14"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"tax"</span> :
                                                    <span className="hljs-string">"2"</span>
                                                </div>
                                            </div>
                                            <div>{"},"}</div>
                                        </div>
                                        <div className='json-content inner-content'>
                                            <div className='code-silver'>{"{"}</div>
                                            <div className='json-content'>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"8132108618"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"Johnson's Baby cream - Milk & Rice"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"unit"</span> :
                                                    <span className="hljs-string">"30 KG"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"stock"</span> :
                                                    <span className="hljs-string">"8"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"selling_price"</span> :
                                                    <span className="hljs-string">"55"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"offer"</span> :
                                                    <span className="hljs-string">"10"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"tax"</span> :
                                                    <span className="hljs-string">"8"</span>
                                                </div>
                                            </div>
                                            <div>{"}"}</div>
                                        </div>
                                        <span>]</span>
                                    </div>
                                    <div>{"}"}</div>
                                </div>
                            </div>
                        </section>
                        <section id={'update-sec'}>
                            <div className="content-head">
                                <h2 className='py-4'>How to update live inventory products?</h2>
                            </div>
                            <p><b>To update live inventory products, use below API call :</b></p>
                            <table className="table-bordered w-100 api-doc-table">
                                <thead>
                                <tr className='bg-light-silver'>
                                    <th>Property</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>store_key</td>
                                    <td>Store Key - Copy Store Key from BayFay Merchant App -&gt; Login -&gt; Store
                                        -&gt; Settings -&gt; Under Inventory Update APIs -&gt; API Keys
                                    </td>
                                </tr>
                                <tr>
                                    <td>product_info</td>
                                    <td>Array of Objects</td>
                                </tr>
                                <tr>
                                    <td>stock</td>
                                    <td>Number of available product count</td>
                                </tr>
                                <tr>
                                    <td>selling_price</td>
                                    <td>Current selling price</td>
                                </tr>
                                <tr>
                                    <td>product_name</td>
                                    <td>Product name (Optional field)</td>
                                </tr>
                                <tr>
                                    <td>offer</td>
                                    <td>Office price (eg, 20%) (Optional field)</td>
                                </tr>
                                <tr>
                                    <td>tax</td>
                                    <td>Product tax percentage (eg, 16%) (Optional field)</td>
                                </tr>
                                </tbody>
                            </table>
                            <hr/>
                            <div className="mt-30">
                                <h6 className='my-2'>Endpoint :</h6>
                                <div className="code">
                                    <div className="ml-0">
                                        <code className="fill-lighten0 col-xs-2">POST</code>
                                        <code className="col-xs-9">/api/update</code>
                                    </div>
                                </div>
                                <h6>Headers :</h6>
                                <div className="code">
                                    <div className="ml-0">
                                        <code className="col-xs-9">Authkey : {"{token}"}</code>
                                    </div>
                                </div>
                                <div className="code">
                                    <div className="ml-0">
                                        <code className="col-xs-9">Content-Type : application/json</code>
                                    </div>
                                </div>
                            </div>
                            <h6>Sample Body :</h6>

                            <div>
                                <div className='code px-5'>
                                    <div className='code-silver'>{"{"}</div>
                                    <div className='json-content'>
                                        <span className="hljs-attr">"store_key"</span> :
                                        <span className="hljs-string">73209720-da08-11e9-9fdb-17d338ca88fb</span>
                                    </div>
                                    <div className='json-content'>
                                        <span className="hljs-attr">"product_info"</span> :
                                        <span className='ml-3'>[</span>
                                        <div className='json-content inner-content'>
                                            <div className='code-silver'>{"{"}</div>
                                            <div className='json-content'>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"4902430777698"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"product_name"</span> :
                                                    <span className="hljs-string">"Ariel Matic Front Load Detergent"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"unit"</span> :
                                                    <span className="hljs-string">"2 KG"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"stock"</span> :
                                                    <span className="hljs-string">"52"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"selling_price"</span> :
                                                    <span className="hljs-string">"55"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"offer"</span> :
                                                    <span className="hljs-string">"4"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"tax"</span> :
                                                    <span className="hljs-string">"2"</span>
                                                </div>
                                            </div>
                                            <div>{"},"}</div>
                                        </div>
                                        <div className='json-content inner-content'>
                                            <div className='code-silver'>{"{"}</div>
                                            <div className='json-content'>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"4902430791465"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"Ariel Matic Front Load Detergent Washing Powder"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"unit"</span> :
                                                    <span className="hljs-string">"1 KG"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"stock"</span> :
                                                    <span className="hljs-string">"31"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"selling_price"</span> :
                                                    <span className="hljs-string">"55"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"offer"</span> :
                                                    <span className="hljs-string">"14"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"tax"</span> :
                                                    <span className="hljs-string">"2"</span>
                                                </div>
                                            </div>
                                            <div>{"},"}</div>
                                        </div>
                                        <div className='json-content inner-content'>
                                            <div className='code-silver'>{"{"}</div>
                                            <div className='json-content'>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"8132108618"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"product_code"</span> :
                                                    <span className="hljs-string">"Johnson's Baby cream - Milk & Rice"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"unit"</span> :
                                                    <span className="hljs-string">"30 KG"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"stock"</span> :
                                                    <span className="hljs-string">"8"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"selling_price"</span> :
                                                    <span className="hljs-string">"55"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"offer"</span> :
                                                    <span className="hljs-string">"10"</span>
                                                </div>
                                                <div>
                                                    <span className="hljs-attr">"tax"</span> :
                                                    <span className="hljs-string">"8"</span>
                                                </div>
                                            </div>
                                            <div>{"}"}</div>
                                        </div>
                                        <span>]</span>
                                    </div>
                                    <div>{"}"}</div>
                                </div>
                            </div>
                            <h6>Response :</h6>
                            <div className='code px-5'>
                                <div className='code-silver'>{"{"}</div>
                                <div className='json-content'>
                                    <span className="hljs-attr">"success"</span> :
                                    <span className="hljs-string">true</span>
                                </div>
                                <div className='json-content'>
                                    <span className="hljs-attr">"message"</span> :
                                    <span className="hljs-string">"Successfully Updated"</span>
                                </div>
                                <div className='json-content'>
                                    <span className="hljs-attr">"Updated"</span> :
                                    <span className="hljs-string">"3"</span>
                                </div>
                                <div className='json-content'>
                                    <span className="hljs-attr">"error"</span> :
                                    <span className="hljs-string">[]</span>
                                </div>
                                <div>{"}"}</div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Aux>
    );
};

export default ApiDocument;
