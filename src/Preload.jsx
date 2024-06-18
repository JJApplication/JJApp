import './Preload.css';
import { Loading } from "@geist-ui/core";

export default function () {
  return (
      <>
        <div className={'preload-page'}>
          <div className={'jjapps-logo preload'}></div>

          <div className={'preload-page-text'}>
            <Loading style={{ fontSize: '1.5rem' }}>JJApp Loading</Loading>
          </div>
        </div>
      </>
      )
}