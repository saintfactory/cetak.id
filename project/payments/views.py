# -*- coding: utf-8 -*-
#!/usr/bin/env python

import datetime
import json

from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

from midtransclient import Snap, CoreApi

from . checkout import core

# Payment method using debit card example: BRI


@api_view(['GET'])
def checkout_api_permata(request, format=None):

    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    charge_api = core.charge({

        'payment_type': 'bank_transfer',
        'transaction_details': {

            'order_id': 'order-id'+timestamp,
            'gross_amount': 200000,
        }

    })

    return render(request, 'permata_checkout.html', context={'permata_va_number': charge_api['permata_va_number'], 'gross_amount': charge_api['gross_amount'], 'order_id': charge_api['order_id']})
