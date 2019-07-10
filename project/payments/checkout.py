# -*- coding: utf-8 -*-
#!/usr/bin/env python

from midtransclient import CoreApi

# Draft for single click payment method using Permata Bank

core = CoreApi(

    is_production=False,
    server_key='SB-Mid-server-GwUP_WGbJPXsDzsNEBRs8IYA',
    client_key='SB-Mid-client-61XuGAwQ8Bj8LxSS',

)

charge_api = core.charge({

    'payment_type': 'bank_transfer',
    'transaction_details': {

        'order_id': 'order-id'+timestamp,
        'gross_amount': 200000,
    }

})
