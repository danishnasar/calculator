import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Operations ({operation}) {
    return (
        <div className='operationPosition'>
            <div className='operationsClass'>
             <button onClick={operation('+')} type="button" class="btn btn-success">+</button>
            </div>
            <div className='operationsClass'>
             <button onClick={operation('-')} type="button" class="btn btn-success">-</button>
            </div> 
            <div className='operationsClass'>
             <button onClick={operation('/')} type="button" class="btn btn-success">/</button>
            </div>
            <div className='operationsClass'>
             <button onClick={operation('*')} type="button" class="btn btn-success">*</button>
            </div>
            <div className='operationsClass'>
             <button onClick={operation('=')} type="button" class="btn btn-success">=</button>
            </div>
        </div>
    )
}