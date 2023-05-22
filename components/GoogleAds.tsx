
import { useEffect } from "react"
export default function GoogleAds(...props: any) {
    const { currentPath } = props;
    useEffect(() => {
        // @ts-ignore
        window.adsbygoogle = window.adsbygoogle || []
        // @ts-ignore
        window.adsbygoogle.push({})
      },[currentPath])

    return( 
        <div key={currentPath} className="my-2 p-2 w-full rounded borderbg-slate-50 overflow-hidden">
        { /*START horizonalAds Google Adsense */ }
            <ins className="adsbygoogle"
                style={{display: 'block'}}
                data-ad-client="ca-pub-1582178454380655"
                data-ad-slot="6582291819"
                data-ad-format="auto"
                data-full-width-responsive="true"
            >
            </ins>
        { /* END horizonalAds Google Adsense */ }
        </div>
    )
}