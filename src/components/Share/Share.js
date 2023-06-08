import React, { Component } from 'react'
import './Share.css'

import {
    WhatsappIcon,
    WhatsappShareButton
} from 'react-share'

export default class Share extends Component {

    render() {

        const shareUrl = 'Este método é pra você, acesse agora: www.deusasdaboaforma.com.br'

        return(
            <div >
                <WhatsappShareButton className='shareButton' url={shareUrl}>
                    <h3>Envie para uma amiga!</h3>
                    <WhatsappIcon  className='shareIcon' size={40}/>
                </WhatsappShareButton>
            </div>
        )
    }

    
}